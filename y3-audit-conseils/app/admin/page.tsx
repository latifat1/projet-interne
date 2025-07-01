import { PrismaClient } from "@prisma/client";
import AdminDashboardClient from "./AdminDashboardClient";

const prisma = new PrismaClient();

export default async function AdminDashboard() {
  const [contactsRaw, appointmentsRaw, applicationsRaw] = await Promise.all([
    prisma.contactSubmission.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.appointment.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.jobApplication.findMany({ orderBy: { createdAt: "desc" } }),
  ]);

  // Transforme les dates en string et assure la présence de 'status', 'coverLetter' et 'message' comme string ou undefined
  const contacts = contactsRaw.map((c) => ({ ...c, createdAt: c.createdAt.toISOString() }));
  const appointments = appointmentsRaw.map((a) => ({ ...a, createdAt: a.createdAt.toISOString(), date: a.date.toISOString(), message: a.message ?? undefined }));
  const applications = applicationsRaw.map((app) => ({ ...app, createdAt: app.createdAt.toISOString(), status: (app as any).status ?? "en_attente", coverLetter: app.coverLetter ?? undefined }));

  return (
    <AdminDashboardClient
      contacts={contacts}
      appointments={appointments}
      applications={applications}
    />
  );
} 