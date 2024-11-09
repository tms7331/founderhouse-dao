'use client'

import React, { useState } from 'react'
import Calendar from 'react-calendar'
import { addDays, format, differenceInDays } from 'date-fns'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

// Helper function to generate random prices for demonstration
const generatePrices = () => {
    const prices: { [key: string]: number } = {}
    const startDate = new Date()
    for (let i = 0; i < 90; i++) {
        const date = addDays(startDate, i)
        prices[format(date, 'yyyy-MM-dd')] = Math.floor(Math.random() * (200 - 50 + 1) + 50)
    }
    return prices
}

export default function AvailabilityCalendar() {
    const [dateRange, setDateRange] = useState<Value>()
    const prices = generatePrices()

    const getDayPrice = (date: Date) => {
        return prices[format(date, 'yyyy-MM-dd')] || 0
    }

    const getTotalPrice = () => {
        if (!Array.isArray(dateRange) || !dateRange[0] || !dateRange[1]) return 0
        let total = 0
        const days = differenceInDays(dateRange[1], dateRange[0]) + 1
        for (let i = 0; i < days; i++) {
            const currentDate = addDays(dateRange[0], i)
            total += getDayPrice(currentDate)
        }
        return total
    }

    return (
        <Card className="w-full max-w-7xl mx-auto">
            <CardHeader>
                <CardTitle className="text-5xl font-bold text-center mb-8">Availability</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-grow">
                        <style>{`
              .react-calendar {
                width: 100%;
                max-width: 100%;
                background: white;
                border: 1px solid #a0a096;
                font-family: Arial, Helvetica, sans-serif;
                line-height: 1.125em;
              }
              .react-calendar--doubleView {
                width: 700px;
              }
              .react-calendar--doubleView .react-calendar__viewContainer {
                display: flex;
                margin: -0.5em;
              }
              .react-calendar--doubleView .react-calendar__viewContainer > * {
                width: 50%;
                margin: 0.5em;
              }
              .react-calendar,
              .react-calendar *,
              .react-calendar *:before,
              .react-calendar *:after {
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
              }
              .react-calendar button {
                margin: 0;
                border: 0;
                outline: none;
              }
              .react-calendar button:enabled:hover {
                cursor: pointer;
              }
              .react-calendar__navigation {
                display: flex;
                height: 44px;
                margin-bottom: 1em;
              }
              .react-calendar__navigation button {
                min-width: 44px;
                background: none;
              }
              .react-calendar__navigation button:disabled {
                background-color: #f0f0f0;
              }
              .react-calendar__navigation button:enabled:hover,
              .react-calendar__navigation button:enabled:focus {
                background-color: #e6e6e6;
              }
              .react-calendar__month-view__weekdays {
                text-align: center;
                text-transform: uppercase;
                font-weight: bold;
                font-size: 0.75em;
              }
              .react-calendar__month-view__weekdays__weekday {
                padding: 0.5em;
              }
              .react-calendar__month-view__weekNumbers .react-calendar__tile {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.75em;
                font-weight: bold;
              }
              .react-calendar__month-view__days__day--weekend {
                color: #d10000;
              }
              .react-calendar__month-view__days__day--neighboringMonth {
                color: #757575;
              }
              .react-calendar__year-view .react-calendar__tile,
              .react-calendar__decade-view .react-calendar__tile,
              .react-calendar__century-view .react-calendar__tile {
                padding: 2em 0.5em;
              }
              .react-calendar__tile {
                max-width: 100%;
                padding: 10px 6.6667px;
                background: none;
                text-align: center;
                line-height: 16px;
                font-size: 1.5em;
                height: 100px;
              }
              .react-calendar__tile:disabled {
                background-color: #f0f0f0;
              }
              .react-calendar__tile:enabled:hover,
              .react-calendar__tile:enabled:focus {
                background-color: #e6e6e6;
              }
              .react-calendar__tile--now {
                background: #ffff76;
              }
              .react-calendar__tile--now:enabled:hover,
              .react-calendar__tile--now:enabled:focus {
                background: #ffffa9;
              }
              .react-calendar__tile--hasActive {
                background: #76baff;
              }
              .react-calendar__tile--hasActive:enabled:hover,
              .react-calendar__tile--hasActive:enabled:focus {
                background: #a9d4ff;
              }
              .react-calendar__tile--active {
                background: #006edc;
                color: white;
              }
              .react-calendar__tile--active:enabled:hover,
              .react-calendar__tile--active:enabled:focus {
                background: #1087ff;
              }
              .react-calendar--selectRange .react-calendar__tile--hover {
                background-color: #e6e6e6;
              }
              .calendar-day-price {
                font-size: 0.7em;
                color: #22c55e;
                font-weight: bold;
                margin-top: 4px;
              }
            `}</style>
                        <Calendar
                            onChange={setDateRange}
                            value={dateRange}
                            selectRange={true}
                            tileContent={({ date, view }) =>
                                view === 'month' ? (
                                    <p className="calendar-day-price">${getDayPrice(date)}</p>
                                ) : null
                            }
                            className="react-calendar"
                        />
                    </div>
                    <div className="flex-shrink-0 w-full lg:w-80">
                        <div className="space-y-8 text-xl">
                            <div>
                                <Label htmlFor="start-date" className="text-2xl mb-3 block">Start Date</Label>
                                <div id="start-date" className="font-semibold text-3xl">
                                    {Array.isArray(dateRange) && dateRange[0] ? format(dateRange[0], 'PPP') : 'Not selected'}
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="end-date" className="text-2xl mb-3 block">End Date</Label>
                                <div id="end-date" className="font-semibold text-3xl">
                                    {Array.isArray(dateRange) && dateRange[1] ? format(dateRange[1], 'PPP') : 'Not selected'}
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="total-price" className="text-2xl mb-3 block">Total Price</Label>
                                <div id="total-price" className="text-5xl font-bold">
                                    ${getTotalPrice()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}