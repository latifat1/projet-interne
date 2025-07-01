import { PrismaClient } from '@prisma/client';
import { Calendar } from '../../components/calendar';
import { notFound } from 'next/navigation';

const prisma = new PrismaClient();

export default async function ReplanifierPage({ params }: { params: { token: string } }) {
  const appointment = await prisma.appointment.findFirst({ where: { rescheduleToken: params.token } });
  if (!appointment) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded shadow text-center">
          <h1 className="text-2xl font-bold mb-4 text-[#073E5D]">Lien invalide</h1>
          <p className="text-gray-600">Ce lien de replanification n'est plus valide. Merci de contacter le cabinet pour fixer un nouveau rendez-vous.</p>
        </div>
      </main>
    );
  }

  // Plus de limitation de date

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded shadow max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-[#073E5D]">Replanifier votre rendez-vous</h1>
        <p className="mb-4 text-gray-700">Choisissez une nouvelle date et heure pour votre rendez-vous avec Y3 Audit & Conseils.</p>
        <form method="POST" action="/api/replanifier">
          <input type="hidden" name="token" value={params.token} />
          <Calendar
            selectedDate={undefined}
            onDateChange={() => {}}
            selectedTime={undefined}
            onTimeChange={() => {}}
          />
          <button type="submit" className="mt-6 w-full bg-[#80C342] text-white py-2 rounded font-semibold">Valider la nouvelle date</button>
        </form>
      </div>
    </main>
  );
} 