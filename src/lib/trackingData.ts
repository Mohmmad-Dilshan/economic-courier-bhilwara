import { ConsignmentDemoResult } from '@/types/tracking';

export const DEMO_SHIPMENTS: Record<string, ConsignmentDemoResult> = {
  'DEMO-ECS-1001': {
    consignmentId: 'DEMO-ECS-1001',
    senderCity: 'Bhilwara (Pur Road Hub) [DEMO]',
    destinationCity: 'Mumbai (Andheri Garment District) [DEMO]',
    serviceType: 'Textile Fabric Sample Express [DEMO SIMULATION]',
    status: 'In Transit',
    currentLocation: 'Surat Cargo Processing Hub, Gujarat [DEMO]',
    lastUpdated: 'Today at 07:15 AM [DEMO]',
    estimatedDelivery: 'Tomorrow by 02:00 PM [DEMO ESTIMATE]',
    pieceCount: 3,
    weightKg: '0.85 kg',
    isDemoRecord: true,
    milestones: [
      {
        timestamp: 'Yesterday, 06:30 PM',
        location: 'Economic Courier Bhilwara Hub [DEMO]',
        status: '[DEMO] Shipment Booked & Barcoded',
        description:
          '[DEMO SIMULATION ONLY] Demonstration record of fabric swatches collected via mill office pickup.',
        completed: true,
      },
      {
        timestamp: 'Yesterday, 09:45 PM',
        location: 'Jaipur Air Freight Sort Facility [DEMO]',
        status: '[DEMO] Dispatched in Transit',
        description:
          '[DEMO SIMULATION ONLY] Consignment sorted into Mumbai overnight air feeder connection.',
        completed: true,
      },
      {
        timestamp: 'Today, 07:15 AM',
        location: 'Surat Cargo Processing Hub [DEMO]',
        status: '[DEMO] In Transit',
        description:
          '[DEMO SIMULATION ONLY] Transshipment scan completed; connected to morning dispatch line.',
        completed: true,
      },
      {
        timestamp: 'Expected Tomorrow, 11:30 AM',
        location: 'Mumbai Delivery Hub (Andheri East) [DEMO]',
        status: '[DEMO] Out for Delivery',
        description:
          '[DEMO SIMULATION ONLY] Assigned to route rider for final delivery to buyer design office.',
        completed: false,
      },
      {
        timestamp: 'Expected Tomorrow, 02:00 PM',
        location: 'Buyer Destination [DEMO]',
        status: '[DEMO] Delivered',
        description:
          '[DEMO SIMULATION ONLY] Recipient signature and delivery acknowledgement upon arrival.',
        completed: false,
      },
    ],
  },

  'DEMO-ECS-2002': {
    consignmentId: 'DEMO-ECS-2002',
    senderCity: 'Bhilwara (RIICO Industrial Phase II) [DEMO]',
    destinationCity: 'Dubai, United Arab Emirates (UAE) [DEMO]',
    serviceType: 'eCS World Wide Express [DEMO SIMULATION]',
    status: 'Out for Delivery',
    currentLocation: 'Dubai Cargo City Distribution Hub [DEMO]',
    lastUpdated: 'Today at 10:45 AM [DEMO]',
    estimatedDelivery: 'Today by 05:30 PM (GST) [DEMO ESTIMATE]',
    pieceCount: 1,
    weightKg: '2.40 kg',
    isDemoRecord: true,
    milestones: [
      {
        timestamp: '3 Days Ago, 05:00 PM',
        location: 'Economic Courier Bhilwara Hub [DEMO]',
        status: '[DEMO] Booked & Export Packaged',
        description:
          '[DEMO SIMULATION ONLY] Commercial invoice verified and moisture-sealed for air transit.',
        completed: true,
      },
      {
        timestamp: '2 Days Ago, 08:30 PM',
        location: 'Delhi IGI Airport Air Cargo Hub [DEMO]',
        status: '[DEMO] Customs Export Cleared',
        description:
          '[DEMO SIMULATION ONLY] Outbound Indian customs clearance completed; loaded onto flight.',
        completed: true,
      },
      {
        timestamp: 'Yesterday, 11:15 PM',
        location: 'Dubai International Airport (DXB) [DEMO]',
        status: '[DEMO] Import Clearance Received',
        description:
          '[DEMO SIMULATION ONLY] Cleared Dubai customs and transferred to local express terminal.',
        completed: true,
      },
      {
        timestamp: 'Today, 10:45 AM',
        location: 'Dubai Cargo City Hub [DEMO]',
        status: '[DEMO] Out for Delivery',
        description:
          '[DEMO SIMULATION ONLY] Courier van dispatched for delivery to importer trade office.',
        completed: true,
      },
      {
        timestamp: 'Expected Today, 05:30 PM',
        location: 'Consignee Address, Dubai [DEMO]',
        status: '[DEMO] Delivered',
        description:
          '[DEMO SIMULATION ONLY] Pending buyer confirmation and signature.',
        completed: false,
      },
    ],
  },

  'DEMO-ECS-3003': {
    consignmentId: 'DEMO-ECS-3003',
    senderCity: 'Bhilwara (Textile Market Counter) [DEMO]',
    destinationCity: 'New Delhi (Connaught Place) [DEMO]',
    serviceType: 'Confidential Tender & Document Express [DEMO SIMULATION]',
    status: 'Delivered',
    currentLocation: 'Central Delhi Delivery Branch [DEMO]',
    lastUpdated: 'Yesterday at 03:20 PM [DEMO]',
    estimatedDelivery: 'Delivered Successfully [DEMO SIMULATION]',
    pieceCount: 1,
    weightKg: '0.35 kg',
    isDemoRecord: true,
    milestones: [
      {
        timestamp: '2 Days Ago, 04:15 PM',
        location: 'Economic Courier Bhilwara Hub [DEMO]',
        status: '[DEMO] Booked in Tamper-Proof Sleeve',
        description:
          '[DEMO SIMULATION ONLY] Legal dossier sealed in heavy waterproof security envelope.',
        completed: true,
      },
      {
        timestamp: 'Yesterday, 06:10 AM',
        location: 'New Delhi Air Express Hub [DEMO]',
        status: '[DEMO] Arrived at Destination Hub',
        description:
          '[DEMO SIMULATION ONLY] Dispatched to central dispatch van for priority delivery.',
        completed: true,
      },
      {
        timestamp: 'Yesterday, 01:30 PM',
        location: 'Central Delhi Route [DEMO]',
        status: '[DEMO] Out for Delivery',
        description:
          '[DEMO SIMULATION ONLY] Handed to express courier messenger.',
        completed: true,
      },
      {
        timestamp: 'Yesterday, 03:20 PM',
        location: 'Connaught Place, New Delhi [DEMO]',
        status: '[DEMO] Delivered',
        description:
          '[DEMO SIMULATION ONLY] Delivered and signed by authorized office reception.',
        completed: true,
      },
    ],
  },
};

// Aliases for user convenience without removing demo indicators
DEMO_SHIPMENTS['ECS-BHL-1001'] = DEMO_SHIPMENTS['DEMO-ECS-1001'];
DEMO_SHIPMENTS['ECS-BHL-2002'] = DEMO_SHIPMENTS['DEMO-ECS-2002'];
DEMO_SHIPMENTS['ECS-BHL-3003'] = DEMO_SHIPMENTS['DEMO-ECS-3003'];
