// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Defines interfaces and data for items to be displayed
 * in the side-nav component.
 */

export interface NavigationItem {
  name: string;
  link: string;
}

export const TELEMETRY_NAV_DATA: NavigationItem = {
  name: 'Telemetry',
  link: '/telemetry'
};

export const DIAGNOSTICS_NAV_DATA: NavigationItem = {
  name: 'Diagnostics',
  link: '/diagnostics'
};

export const EVENTS_NAV_DATA: NavigationItem = {
  name: 'Events',
  link: '/events'
};
