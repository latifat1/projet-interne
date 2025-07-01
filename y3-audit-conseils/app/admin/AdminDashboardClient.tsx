"use client";
import { useState } from "react";
import { Calendar } from "../components/calendar";
import { useRouter } from "next/navigation";

export type Application = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  cvPath: string;
  coverLetter?: string;
  createdAt: string;
  status: string;
};
export type Appointment = {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message?: string;
  createdAt: string;
  status: string;
};
export type Contact = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
};

type Props = {
  contacts: Contact[];
  appointments: Appointment[];
  applications: Application[];
};

const STATUS_LABELS: Record<string, string> = {
  en_attente: "En attente",
  accepte: "Accepté",
  refuse: "Refusé",
  valide: "Validé",
};
const STATUS_COLORS: Record<string, string> = {
  en_attente: "text-gray-500",
  accepte: "text-green-600",
  refuse: "text-red-600",
  valide: "text-[#80C342]",
};

const APPOINTMENT_STATUS_LABELS: Record<string, string> = {
  en_attente: "En attente",
  confirme: "Confirmé",
  a_replanifier: "À replanifier",
  annule: "Annulé",
};
const APPOINTMENT_STATUS_COLORS: Record<string, string> = {
  en_attente: "bg-gray-200 text-gray-700",
  confirme: "bg-[#80C342] text-white",
  a_replanifier: "bg-yellow-400 text-white",
  annule: "bg-red-500 text-white",
};

const TABS = [
  { key: "all", label: "Toutes" },
  { key: "en_attente", label: "En attente" },
  { key: "accepte", label: "Acceptées" },
  { key: "refuse", label: "Refusées" },
  { key: "valide", label: "Validées" },
];

const APPOINTMENT_TABS = [
  { key: "all", label: "Tous" },
  { key: "en_attente", label: "En attente" },
  { key: "confirme", label: "Confirmés" },
  { key: "a_replanifier", label: "À replanifier" },
  { key: "annule", label: "Annulés" },
];

const PAGE_SIZE = 5;

export default function AdminDashboardClient({ contacts, appointments, applications }: Props) {
  const [section, setSection] = useState<'candidatures' | 'rendezvous' | 'contacts'>('candidatures');

  // Candidatures
  const [tab, setTab] = useState("all");
  const [searchC, setSearchC] = useState("");
  const [pageC, setPageC] = useState(1);
  const [apps, setApps] = useState(applications);

  // Rendez-vous
  const [tabR, setTabR] = useState("all");
  const [searchR, setSearchR] = useState("");
  const [pageR, setPageR] = useState(1);

  // Contacts
  const [searchCt, setSearchCt] = useState("");
  const [pageCt, setPageCt] = useState(1);

  const [showReschedule, setShowReschedule] = useState<{id: number, open: boolean}>({id: -1, open: false});
  const [rescheduleDate, setRescheduleDate] = useState<Date | undefined>(undefined);
  const [rescheduleTime, setRescheduleTime] = useState<string | undefined>(undefined);

  const [appointmentsState, setAppointmentsState] = useState(appointments);

  const router = useRouter();

  const handleStatusChange = async (id: number, status: string) => {
    await fetch(`/api/job-application-status`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    setApps(apps.map(app => app.id === id ? { ...app, status } : app));
  };

  // Filtrage candidatures
  const filteredC = apps.filter(app => {
    const matchTab = tab === "all" ? true : app.status === tab;
    const matchSearch =
      app.firstName.toLowerCase().includes(searchC.toLowerCase()) ||
      app.lastName.toLowerCase().includes(searchC.toLowerCase()) ||
      app.email.toLowerCase().includes(searchC.toLowerCase()) ||
      app.position.toLowerCase().includes(searchC.toLowerCase());
    return matchTab && matchSearch;
  });
  const totalPagesC = Math.ceil(filteredC.length / PAGE_SIZE);
  const paginatedC = filteredC.slice((pageC - 1) * PAGE_SIZE, pageC * PAGE_SIZE);

  // Filtrage rendez-vous
  const filteredR = appointmentsState.filter(a => {
    const matchTab = tabR === "all" ? true : (a.status || "en_attente") === tabR;
    const matchSearch =
      a.name.toLowerCase().includes(searchR.toLowerCase()) ||
      a.email.toLowerCase().includes(searchR.toLowerCase()) ||
      a.phone.toLowerCase().includes(searchR.toLowerCase()) ||
      a.service.toLowerCase().includes(searchR.toLowerCase());
    return matchTab && matchSearch;
  });
  const totalPagesR = Math.ceil(filteredR.length / PAGE_SIZE);
  const paginatedR = filteredR.slice((pageR - 1) * PAGE_SIZE, pageR * PAGE_SIZE);

  // Filtrage contacts
  const filteredCt = contacts.filter(c =>
    c.name.toLowerCase().includes(searchCt.toLowerCase()) ||
    c.email.toLowerCase().includes(searchCt.toLowerCase()) ||
    c.subject.toLowerCase().includes(searchCt.toLowerCase())
  );
  const totalPagesCt = Math.ceil(filteredCt.length / PAGE_SIZE);
  const paginatedCt = filteredCt.slice((pageCt - 1) * PAGE_SIZE, pageCt * PAGE_SIZE);

  // Ajoute la fonction pour mettre à jour le statut/date d'un rendez-vous
  const updateAppointment = async (id: number, status: string, date?: Date, time?: string) => {
    const res = await fetch(`/api/appointment-status`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status, date, time }),
    });
    const updated = await res.json();
    setAppointmentsState(appointmentsState.map(a =>
      a.id === id ? { ...a, status: updated.status, date: updated.date, time: updated.time } : a
    ));
  };

  const handleLogout = async () => {
    await fetch("/api/admin-login", { method: "DELETE" });
    router.push("/admin-login");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#073E5D] border-r flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 p-6 border-b border-[#80C342]">
            <div className="w-12 h-12 rounded-full bg-gray-200" />
            <div>
              <div className="font-bold text-white">Admin</div>
              <div className="text-xs text-[#80C342]">admin@ycubeac.com</div>
            </div>
          </div>
          <nav className="mt-6 flex flex-col gap-2 px-4">
            <button className={`text-left px-4 py-2 rounded ${section === 'candidatures' ? 'bg-[#80C342] text-white font-semibold' : 'hover:bg-[#80C342]/20 text-white'}`} onClick={() => setSection('candidatures')}>Candidatures</button>
            <button className={`text-left px-4 py-2 rounded ${section === 'rendezvous' ? 'bg-[#80C342] text-white font-semibold' : 'hover:bg-[#80C342]/20 text-white'}`} onClick={() => setSection('rendezvous')}>Rendez-vous</button>
            <button className={`text-left px-4 py-2 rounded ${section === 'contacts' ? 'bg-[#80C342] text-white font-semibold' : 'hover:bg-[#80C342]/20 text-white'}`} onClick={() => setSection('contacts')}>Contacts</button>
          </nav>
        </div>
        <div className="p-4 border-t border-[#80C342]">
          <button className="text-[#80C342] font-semibold" onClick={handleLogout}>Se déconnecter</button>
        </div>
      </aside>
      {/* Main content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-2 text-[#073E5D]">{section === 'candidatures' ? 'Candidatures' : section === 'rendezvous' ? 'Rendez-vous' : 'Messages de contact'}</h1>
        {section === 'candidatures' && (
          <>
            <p className="text-gray-600 mb-6">Gérez les candidatures reçues, filtrez par statut ou recherchez un candidat.</p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div className="flex gap-2">
                {TABS.map(t => (
                  <button
                    key={t.key}
                    className={`px-4 py-2 rounded-t ${tab === t.key ? "bg-white border-b-2 border-[#80C342] font-bold text-[#073E5D]" : "bg-gray-100 text-[#073E5D]"}`}
                    onClick={() => { setTab(t.key); setPageC(1); }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <input
                type="text"
                placeholder="Recherche..."
                value={searchC}
                onChange={e => { setSearchC(e.target.value); setPageC(1); }}
                className="border px-3 py-2 rounded w-full md:w-64"
              />
            </div>
            <div className="bg-white rounded shadow p-4 overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-2 py-2 text-left text-xs font-semibold text-gray-500">Prénom</th>
                    <th className="px-2 py-2 text-left text-xs font-semibold text-gray-500">Nom</th>
                    <th className="px-2 py-2 text-left text-xs font-semibold text-gray-500">Email</th>
                    <th className="px-2 py-2 text-left text-xs font-semibold text-gray-500">Téléphone</th>
                    <th className="px-2 py-2 text-left text-xs font-semibold text-gray-500">Poste</th>
                    <th className="px-2 py-2 text-left text-xs font-semibold text-gray-500">CV</th>
                    <th className="px-2 py-2 text-left text-xs font-semibold text-gray-500">Lettre de motivation</th>
                    <th className="px-2 py-2 text-left text-xs font-semibold text-gray-500">Date</th>
                    <th className="px-2 py-2 text-left text-xs font-semibold text-gray-500">Statut</th>
                    <th className="px-2 py-2 text-left text-xs font-semibold text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedC.length === 0 && (
                    <tr><td colSpan={10} className="text-center py-8 text-gray-400">Aucune candidature trouvée.</td></tr>
                  )}
                  {paginatedC.map(app => (
                    <tr key={app.id} className="border-b hover:bg-gray-50">
                      <td className="px-2 py-2">{app.firstName}</td>
                      <td className="px-2 py-2">{app.lastName}</td>
                      <td className="px-2 py-2">{app.email}</td>
                      <td className="px-2 py-2">{app.phone}</td>
                      <td className="px-2 py-2">{app.position}</td>
                      <td className="px-2 py-2"><a href={app.cvPath} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Voir le CV</a></td>
                      <td className="px-2 py-2">{app.coverLetter}</td>
                      <td className="px-2 py-2">{new Date(app.createdAt).toLocaleDateString()}</td>
                      <td className={`px-2 py-2 font-bold ${STATUS_COLORS[app.status]}`}>{STATUS_LABELS[app.status] || app.status}</td>
                      <td className="px-2 py-2">
                        <select
                          value={app.status}
                          onChange={e => handleStatusChange(app.id, e.target.value)}
                          className="border rounded px-2 py-1"
                        >
                          <option value="en_attente">En attente</option>
                          <option value="accepte">Accepté</option>
                          <option value="refuse">Refusé</option>
                          <option value="valide">Validé</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-center items-center gap-2 mt-4">
                <button className="px-2 py-1 rounded bg-gray-100" disabled={pageC === 1} onClick={() => setPageC(pageC - 1)}>&lt;</button>
                {Array.from({ length: totalPagesC }, (_, i) => (
                  <button key={i} className={`px-3 py-1 rounded ${pageC === i + 1 ? "bg-[#80C342] text-white" : "bg-gray-100 text-[#073E5D]"}`} onClick={() => setPageC(i + 1)}>{i + 1}</button>
                ))}
                <button className="px-2 py-1 rounded bg-gray-100" disabled={pageC === totalPagesC || totalPagesC === 0} onClick={() => setPageC(pageC + 1)}>&gt;</button>
              </div>
            </div>
          </>
        )}
        {section === 'rendezvous' && (
          <>
            <h1 className="text-2xl font-bold mb-2 text-[#073E5D]">Rendez-vous</h1>
            <p className="text-gray-600 mb-6">Consultez, filtrez et gérez les rendez-vous clients.</p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div className="flex gap-2">
                {APPOINTMENT_TABS.map(t => (
                  <button
                    key={t.key}
                    className={`px-4 py-2 rounded-t ${tabR === t.key ? "bg-white border-b-2 border-[#80C342] font-bold text-[#073E5D]" : "bg-gray-100 text-[#073E5D]"}`}
                    onClick={() => { setTabR(t.key); setPageR(1); }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <input
                type="text"
                placeholder="Recherche..."
                value={searchR}
                onChange={e => { setSearchR(e.target.value); setPageR(1); }}
                className="border px-3 py-2 rounded w-full md:w-64"
              />
            </div>
            <div className="bg-white rounded shadow p-4 overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-2 py-2 text-left text-xs font-semibold text-gray-500">Nom</th>
                    <th className="px-2 py-2 text-left text-xs font-semibold text-gray-500">Email</th>
                    <th className="px-2 py-2 text-left text-xs font-semibold text-gray-500">Téléphone</th>
                    <th className="px-2 py-2 text-left text-xs font-semibold text-gray-500">Service</th>
                    <th className="px-2 py-2 text-left text-xs font-semibold text-gray-500">Date</th>
                    <th className="px-2 py-2 text-left text-xs font-semibold text-gray-500">Heure</th>
                    <th className="px-2 py-2 text-left text-xs font-semibold text-gray-500">Message</th>
                    <th className="px-2 py-2 text-left text-xs font-semibold text-gray-500">Statut</th>
                    <th className="px-2 py-2 text-left text-xs font-semibold text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedR.length === 0 && (
                    <tr><td colSpan={9} className="text-center py-8 text-gray-400">Aucun rendez-vous trouvé.</td></tr>
                  )}
                  {paginatedR.map(a => (
                    <tr key={a.id} className="border-b hover:bg-gray-50">
                      <td className="px-2 py-2">{a.name}</td>
                      <td className="px-2 py-2">{a.email}</td>
                      <td className="px-2 py-2">{a.phone}</td>
                      <td className="px-2 py-2">{a.service}</td>
                      <td className="px-2 py-2">{new Date(a.date).toLocaleDateString()}</td>
                      <td className="px-2 py-2">{a.time}</td>
                      <td className="px-2 py-2">{a.message}</td>
                      <td className="px-2 py-2 font-bold">
                        <span className={`px-2 py-1 rounded ${APPOINTMENT_STATUS_COLORS[a.status || 'en_attente']}`}>{APPOINTMENT_STATUS_LABELS[a.status || 'en_attente']}</span>
                      </td>
                      <td className="px-2 py-2">
                        <select
                          value={a.status || 'en_attente'}
                          onChange={e => updateAppointment(a.id, e.target.value)}
                          className="border rounded px-2 py-1"
                        >
                          <option value="en_attente">En attente</option>
                          <option value="confirme">Confirmé</option>
                          <option value="a_replanifier">À replanifier</option>
                          <option value="annule">Annulé</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-center items-center gap-2 mt-4">
                <button className="px-2 py-1 rounded bg-gray-100" disabled={pageR === 1} onClick={() => setPageR(pageR - 1)}>&lt;</button>
                {Array.from({ length: totalPagesR }, (_, i) => (
                  <button key={i} className={`px-3 py-1 rounded ${pageR === i + 1 ? "bg-[#80C342] text-white" : "bg-gray-100 text-[#073E5D]"}`} onClick={() => setPageR(i + 1)}>{i + 1}</button>
                ))}
                <button className="px-2 py-1 rounded bg-gray-100" disabled={pageR === totalPagesR || totalPagesR === 0} onClick={() => setPageR(pageR + 1)}>&gt;</button>
              </div>
            </div>
          </>
        )}
        {section === 'contacts' && (
          <>
            <p className="text-gray-600 mb-6">Consultez et recherchez les messages envoyés via le formulaire de contact.</p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div />
              <input
                type="text"
                placeholder="Recherche..."
                value={searchCt}
                onChange={e => { setSearchCt(e.target.value); setPageCt(1); }}
                className="border px-3 py-2 rounded w-full md:w-64"
              />
            </div>
            <div className="bg-white rounded shadow p-4 overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-2 py-2 text-left text-xs font-semibold text-gray-500">Nom</th>
                    <th className="px-2 py-2 text-left text-xs font-semibold text-gray-500">Email</th>
                    <th className="px-2 py-2 text-left text-xs font-semibold text-gray-500">Sujet</th>
                    <th className="px-2 py-2 text-left text-xs font-semibold text-gray-500">Message</th>
                    <th className="px-2 py-2 text-left text-xs font-semibold text-gray-500">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedCt.length === 0 && (
                    <tr><td colSpan={5} className="text-center py-8 text-gray-400">Aucun message trouvé.</td></tr>
                  )}
                  {paginatedCt.map(c => (
                    <tr key={c.id} className="border-b hover:bg-gray-50">
                      <td className="px-2 py-2">{c.name}</td>
                      <td className="px-2 py-2">{c.email}</td>
                      <td className="px-2 py-2">{c.subject}</td>
                      <td className="px-2 py-2">{c.message}</td>
                      <td className="px-2 py-2">{new Date(c.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-center items-center gap-2 mt-4">
                <button className="px-2 py-1 rounded bg-gray-100" disabled={pageCt === 1} onClick={() => setPageCt(pageCt - 1)}>&lt;</button>
                {Array.from({ length: totalPagesCt }, (_, i) => (
                  <button key={i} className={`px-3 py-1 rounded ${pageCt === i + 1 ? "bg-[#80C342] text-white" : "bg-gray-100 text-[#073E5D]"}`} onClick={() => setPageCt(i + 1)}>{i + 1}</button>
                ))}
                <button className="px-2 py-1 rounded bg-gray-100" disabled={pageCt === totalPagesCt || totalPagesCt === 0} onClick={() => setPageCt(pageCt + 1)}>&gt;</button>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
} 