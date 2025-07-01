import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { sendMail } from '../utils/sendMail'
import crypto from 'crypto'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const { id, status, date, time } = await request.json()
  if (!id || !status) {
    return NextResponse.json({ error: 'Missing id or status' }, { status: 400 })
  }
  let updateData: any = { status }
  if (date) updateData.date = new Date(date)
  if (time) updateData.time = time

  // Génération du token pour replanification
  let rescheduleToken: string | undefined = undefined
  let rescheduleTokenCreatedAt: Date | undefined = undefined
  if (status === 'a_replanifier') {
    rescheduleToken = crypto.randomBytes(24).toString('hex')
    rescheduleTokenCreatedAt = new Date()
    updateData.rescheduleToken = rescheduleToken
    updateData.rescheduleTokenCreatedAt = rescheduleTokenCreatedAt
  } else {
    updateData.rescheduleToken = null
    updateData.rescheduleTokenCreatedAt = null
  }

  const updated = await prisma.appointment.update({
    where: { id },
    data: updateData,
  })

  // Envoi d'un email automatique selon le statut
  if (status === 'confirme') {
    await sendMail({
      to: updated.email,
      subject: 'Votre rendez-vous est confirmé !',
      text: `Bonjour ${updated.name},\n\nVotre rendez-vous pour le service ${updated.service} est confirmé pour le ${new Date(updated.date).toLocaleDateString()} à ${updated.time}.\nNous vous attendons avec plaisir.\n\nCordialement,\nL'équipe Y3 Audit & Conseils`,
    })
  } else if (status === 'a_replanifier') {
    await sendMail({
      to: updated.email,
      subject: 'Replanification de votre rendez-vous',
      text: `Bonjour ${updated.name},\n\nVotre rendez-vous pour le service ${updated.service} doit être replanifié.\nMerci de répondre à ce message en nous indiquant la nouvelle date et l'heure qui vous conviendraient.\n\nNous reviendrons vers vous pour confirmer la nouvelle date.\n\nCordialement,\nL'équipe Y3 Audit & Conseils`,
      html: `<p>Bonjour ${updated.name},</p><p>Votre rendez-vous pour le service <b>${updated.service}</b> doit être replanifié.<br/>Merci de répondre à ce message en nous indiquant la nouvelle date et l'heure qui vous conviendraient.</p><p>Nous reviendrons vers vous pour confirmer la nouvelle date.</p><p>Cordialement,<br/>L'équipe Y3 Audit & Conseils</p>`
    })
  } else if (status === 'annule') {
    await sendMail({
      to: updated.email,
      subject: 'Votre rendez-vous a été annulé',
      text: `Bonjour ${updated.name},\n\nNous vous informons que votre rendez-vous pour le service ${updated.service} a été annulé.\nN'hésitez pas à nous recontacter pour fixer une nouvelle date.\n\nCordialement,\nL'équipe Y3 Audit & Conseils`,
    })
  }

  return NextResponse.json(updated)
} 