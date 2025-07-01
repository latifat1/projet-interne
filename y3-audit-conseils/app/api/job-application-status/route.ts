import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { sendMail } from '../utils/sendMail'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const { id, status } = await request.json()
  if (!id || !status) {
    return NextResponse.json({ error: 'Missing id or status' }, { status: 400 })
  }
  const updated = await prisma.jobApplication.update({
    where: { id },
    data: { status },
  })

  // Envoi d'un email automatique selon le statut
  if (status === 'accepte') {
    await sendMail({
      to: updated.email,
      subject: 'Votre candidature a été acceptée !',
      text: `Bonjour ${updated.firstName},\n\nFélicitations, votre candidature pour le poste de ${updated.position} a été acceptée !\nNous vous contacterons prochainement pour la suite du processus.\n\nCordialement,\nL'équipe Y3 Audit & Conseils`,
    })
  } else if (status === 'refuse') {
    await sendMail({
      to: updated.email,
      subject: 'Réponse à votre candidature',
      text: `Bonjour ${updated.firstName},\n\nNous vous remercions pour votre candidature au poste de ${updated.position}.\nAprès étude de votre dossier, nous sommes au regret de ne pas pouvoir y donner une suite favorable.\nNous vous souhaitons une bonne continuation.\n\nCordialement,\nL'équipe Y3 Audit & Conseils`,
    })
  }

  return NextResponse.json(updated)
} 