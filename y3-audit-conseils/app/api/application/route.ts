import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { writeFile } from 'fs/promises';
import path from 'path';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const cv = formData.get('cv') as File;
    const coverLetter = formData.get('coverLetter') as string;

    if (!firstName || !lastName || !email || !phone || !position || !cv) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Handle file upload
    const cvBuffer = Buffer.from(await cv.arrayBuffer());
    const cvFilename = `${Date.now()}-${cv.name}`;
    const cvPath = path.join(process.cwd(), 'public/uploads/cvs', cvFilename);
    await writeFile(cvPath, cvBuffer);

    const application = await prisma.jobApplication.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        position,
        cvPath: `/uploads/cvs/${cvFilename}`,
        coverLetter,
      },
    });

    return NextResponse.json(application, { status: 201 });
  } catch (error) {
    console.error('Error creating job application:', error);
    return NextResponse.json({ error: 'An error occurred while processing your request.' }, { status: 500 });
  }
} 