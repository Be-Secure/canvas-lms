/*
 * Copyright (C) 2023 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

export type UnknownSubset<T> = {
  [K in keyof T]?: T[K]
}

export type FrequencyValue = 'YEARLY' | 'MONTHLY' | 'WEEKLY' | 'DAILY'
export const FrequencyOptionStrings: FrequencyValue[] = ['YEARLY', 'MONTHLY', 'WEEKLY', 'DAILY']

export type MonthlyModeValue = 'BYMONTHDATE' | 'BYMONTHDAY' | 'BYLASTMONTHDAY'

export type RRULEDayValue = 'SU' | 'MO' | 'TU' | 'WE' | 'TH' | 'FR' | 'SA'
export type SelectedDaysArray = RRULEDayValue[]
export const AllRRULEDayValues: SelectedDaysArray = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']
