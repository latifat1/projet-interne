"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface CalendarProps {
  selectedDate: Date | undefined
  onDateChange: (date: Date) => void
  selectedTime: string | undefined
  onTimeChange: (time: string) => void
}

export function Calendar({ selectedDate, onDateChange, selectedTime, onTimeChange }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [viewMode, setViewMode] = useState<"date" | "time">("date")

  // Available time slots - morning
  const morningSlots = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00"]

  // Available time slots - afternoon
  const afternoonSlots = [
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
  ]

  // Get days in month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  // Get day of week for first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()
  const daysInMonth = getDaysInMonth(year, month)
  const firstDayOfMonth = getFirstDayOfMonth(year, month)

  // Adjust for Monday as first day of week
  const firstDayAdjusted = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1

  const monthNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ]

  const dayNames = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]

  const prevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1))
  }

  const handleDateClick = (day: number) => {
    const newDate = new Date(year, month, day)
    // Don't allow selecting dates in the past
    if (newDate >= new Date(new Date().setHours(0, 0, 0, 0))) {
      onDateChange(newDate)
      // Automatically switch to time selection after date is selected
      setViewMode("time")
    }
  }

  const isToday = (day: number) => {
    const today = new Date()
    return day === today.getDate() && month === today.getMonth() && year === today.getFullYear()
  }

  const isPast = (day: number) => {
    const today = new Date()
    const checkDate = new Date(year, month, day)
    return checkDate < new Date(today.getFullYear(), today.getMonth(), today.getDate())
  }

  const isSelected = (day: number) => {
    return selectedDate?.getDate() === day && selectedDate?.getMonth() === month && selectedDate?.getFullYear() === year
  }

  // Generate calendar days
  const calendarDays = []
  for (let i = 0; i < firstDayAdjusted; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="h-10"></div>)
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isPastDay = isPast(day)
    calendarDays.push(
      <button
        key={day}
        onClick={() => handleDateClick(day)}
        disabled={isPastDay}
        className={cn(
          "h-10 w-10 rounded-full flex items-center justify-center text-sm transition-colors",
          isToday(day) && !isSelected(day) && "border border-[#80C342]",
          isSelected(day) && "bg-[#80C342] text-white",
          isPastDay ? "text-gray-300 cursor-not-allowed" : "hover:bg-gray-100",
        )}
      >
        {day}
      </button>,
    )
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  return (
    <div className="space-y-6">
      {/* Toggle between date and time selection */}
      {selectedDate && (
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => setViewMode("date")}
            className={cn(
              "flex-1 py-2 px-4 rounded-md font-medium transition-colors",
              viewMode === "date" ? "bg-[#073E5D] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200",
            )}
          >
            Date
          </button>
          <button
            onClick={() => setViewMode("time")}
            className={cn(
              "flex-1 py-2 px-4 rounded-md font-medium transition-colors",
              viewMode === "time" ? "bg-[#073E5D] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200",
            )}
            disabled={!selectedDate}
          >
            Heure
          </button>
        </div>
      )}

      {viewMode === "date" ? (
        <>
          <div className="flex justify-between items-center">
            <button
              onClick={prevMonth}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Mois précédent"
            >
              <ChevronLeft size={20} />
            </button>
            <h3 className="text-lg font-medium">
              {monthNames[month]} {year}
            </h3>
            <button
              onClick={nextMonth}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Mois suivant"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {dayNames.map((day) => (
              <div key={day} className="h-10 flex items-center justify-center text-sm font-medium text-gray-500">
                {day}
              </div>
            ))}
            {calendarDays}
          </div>

          {selectedDate && (
            <div className="mt-4 p-3 bg-blue-50 rounded-md">
              <p className="text-sm text-blue-800">
                Date sélectionnée: <strong>{formatDate(selectedDate)}</strong>
              </p>
              <p className="text-sm text-blue-600 mt-1">
                Cliquez sur "Heure" ci-dessus pour sélectionner un créneau horaire
              </p>
            </div>
          )}
        </>
      ) : (
        selectedDate && (
          <div className="mt-2">
            <div className="flex items-center mb-4 text-[#073E5D]">
              <Clock size={20} className="mr-2" />
              <h4 className="text-lg font-medium">Choisissez un horaire pour le {formatDate(selectedDate)}</h4>
            </div>

            <div className="mb-6">
              <h5 className="text-md font-medium text-gray-700 mb-2">Matin</h5>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {morningSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => onTimeChange(time)}
                    className={cn(
                      "py-2 px-3 border rounded-md text-sm transition-colors",
                      selectedTime === time
                        ? "bg-[#80C342] text-white border-[#80C342]"
                        : "hover:bg-gray-50 border-gray-300",
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-md font-medium text-gray-700 mb-2">Après-midi</h5>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {afternoonSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => onTimeChange(time)}
                    className={cn(
                      "py-2 px-3 border rounded-md text-sm transition-colors",
                      selectedTime === time
                        ? "bg-[#80C342] text-white border-[#80C342]"
                        : "hover:bg-gray-50 border-gray-300",
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {selectedTime && (
              <div className="mt-4 p-3 bg-green-50 rounded-md">
                <p className="text-sm text-green-800">
                  Vous avez sélectionné le rendez-vous le <strong>{formatDate(selectedDate)}</strong> à{" "}
                  <strong>{selectedTime}</strong>
                </p>
              </div>
            )}
          </div>
        )
      )}
    </div>
  )
}
