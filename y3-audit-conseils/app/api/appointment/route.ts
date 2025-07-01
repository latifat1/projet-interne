import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { sendMail } from "../utils/sendMail";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { service, name, company, phone, email, date, time, message } = body;

    if (!service || !name || !phone || !email || !date || !time) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const appointment = await prisma.appointment.create({
      data: {
        service,
        name,
        company,
        phone,
        email,
        date: new Date(date),
        time,
        message,
      },
    });

    // Envoi d'un email personnalisé à l'utilisateur
    await sendMail({
      to: email,
      subject: "Confirmation de votre demande de rendez-vous",
      text: `Bonjour ${name},\n\nNous avons bien reçu votre demande de rendez-vous pour le service : ${service}.\nNous vous contacterons rapidement pour confirmer la date et l'heure.\n\nCordialement,\nL'équipe Y3 Audit & Conseils`,
    });

    return NextResponse.json(appointment, { status: 201 });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return NextResponse.json({ error: 'An error occurred while processing your request.' }, { status: 500 });
  }
} 