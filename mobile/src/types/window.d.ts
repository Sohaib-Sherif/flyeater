import type { System } from '@/services/System';
import { FlyApi } from '@/services/FlyApi';

declare global {
  interface Window {
    flyApi: FlyApi
    system: System
  }
}

export {}
