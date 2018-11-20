/**
 * @Author: JoseMunoz
 * @Date:   2018-11-09T13:44:46-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-19T21:35:44-06:00
 */
import { expect } from 'chai';
import sinon from 'sinon';
import {
  http,
  reTrack,
  addTracking,
  detectCourier,
  getAllCouriers,
  updateTracking,
  getTrackingInfo,
  getActiveCouriers,
  getSubscriptions,
  getLatestCheckpoint,
  subscribeToTracking,
  unsubscribeToTracking,
} from './AfterShip';

const sandbox = sinon.createSandbox();
const PHONY_TRACKING_ID = '5b7658cec7c33c0e007de3c5';
const TRACKING_NUMBER_STUB = '111111111111';
const CURIER_STUB = 'fedex';
const NOTIFICATION_STUB = {
  emails: ['user1@gmail.com', 'user2@gmail.com'],
  smses: ['+85291239123', '+85261236123'],
};

const SOME_COURIERS = [
  {
    slug: 'fedex',
    name: 'FedEx',
    phone: '+1 800 247 4747',
    other_name: 'Federal Express',
    web_url: 'http://www.fedex.com/',
    required_fields: [],
    optional_fields: [],
  },
  {
    slug: 'dx',
    name: 'DX',
    phone: '+44 0844 826 1178',
    other_name: 'DX Freight',
    web_url: 'https://www.thedx.co.uk/',
    required_fields: [
      'tracking_postal_code',
    ],
    optional_fields: [],
  },
];

const SOME_CHECKPOINTS = [
  {
    slug: 'fedex',
    city: null,
    created_at: '2018-08-17T05:10:41+00:00',
    location: null,
    country_name: null,
    message: 'Shipment information sent to FedEx',
    country_iso3: null,
    tag: 'InfoReceived',
    subtag: 'InfoReceived_001',
    subtag_message: 'Info Received',
    checkpoint_time: '2018-07-23T01:21:39-05:00',
    coordinates: [],
    state: null,
    zip: null,
  },
  {
    slug: 'fedex',
    city: null,
    created_at: '2018-08-17T05:10:41+00:00',
    location: 'DONGGUAN CN',
    country_name: 'China',
    message: 'Picked up',
    country_iso3: 'CHN',
    tag: 'InTransit',
    subtag: 'InTransit_002',
    subtag_message: 'Acceptance scan',
    checkpoint_time: '2018-07-23T16:58:00+08:00',
    coordinates: [],
    state: null,
    zip: null,
  },
  {
    slug: 'fedex',
    city: null,
    created_at: '2018-08-17T05:10:41+00:00',
    location: 'DONGGUAN CN',
    country_name: 'China',
    message: 'Left FedEx origin facility',
    country_iso3: 'CHN',
    tag: 'InTransit',
    subtag: 'InTransit_007',
    subtag_message: 'Departure Scan',
    checkpoint_time: '2018-07-23T20:45:00+08:00',
    coordinates: [],
    state: null,
    zip: null,
  },
  {
    slug: 'fedex',
    city: null,
    created_at: '2018-08-17T05:10:41+00:00',
    location: 'GUANGZHOU CN',
    country_name: 'China',
    message: 'In transit',
    country_iso3: 'CHN',
    tag: 'InTransit',
    subtag: 'InTransit_001',
    subtag_message: 'In Transit',
    checkpoint_time: '2018-07-23T23:13:00+08:00',
    coordinates: [],
    state: null,
    zip: null,
  },
  {
    slug: 'fedex',
    city: null,
    created_at: '2018-08-17T05:10:41+00:00',
    location: 'GUANGZHOU CN',
    country_name: 'China',
    message: 'Arrived at FedEx location',
    country_iso3: 'CHN',
    tag: 'InTransit',
    subtag: 'InTransit_003',
    subtag_message: 'Arrival scan',
    checkpoint_time: '2018-07-23T23:14:00+08:00',
    coordinates: [],
    state: null,
    zip: null,
  },
  {
    slug: 'fedex',
    city: null,
    created_at: '2018-08-17T05:10:41+00:00',
    location: 'GUANGZHOU CN',
    country_name: 'China',
    message: 'International shipment release - Export',
    country_iso3: 'CHN',
    tag: 'InTransit',
    subtag: 'InTransit_007',
    subtag_message: 'Departure Scan',
    checkpoint_time: '2018-07-23T23:14:00+08:00',
    coordinates: [],
    state: null,
    zip: null,
  },
  {
    slug: 'fedex',
    city: null,
    created_at: '2018-08-17T05:10:41+00:00',
    location: 'GUANGZHOU CN',
    country_name: 'China',
    message: 'Departed FedEx location',
    country_iso3: 'CHN',
    tag: 'InTransit',
    subtag: 'InTransit_007',
    subtag_message: 'Departure Scan',
    checkpoint_time: '2018-07-24T03:26:00+08:00',
    coordinates: [],
    state: null,
    zip: null,
  },
  {
    slug: 'fedex',
    city: null,
    created_at: '2018-08-17T05:10:41+00:00',
    location: 'GUANGZHOU CN',
    country_name: 'China',
    message: 'In transit',
    country_iso3: 'CHN',
    tag: 'InTransit',
    subtag: 'InTransit_001',
    subtag_message: 'In Transit',
    checkpoint_time: '2018-07-24T04:01:00+08:00',
    coordinates: [],
    state: null,
    zip: null,
  },
  {
    slug: 'fedex',
    city: null,
    created_at: '2018-08-17T05:10:41+00:00',
    location: 'GUANGZHOU CN',
    country_name: 'China',
    message: 'In transit',
    country_iso3: 'CHN',
    tag: 'InTransit',
    subtag: 'InTransit_001',
    subtag_message: 'In Transit',
    checkpoint_time: '2018-07-24T04:03:00+08:00',
    coordinates: [],
    state: null,
    zip: null,
  },
  {
    slug: 'fedex',
    city: null,
    created_at: '2018-08-17T05:10:41+00:00',
    location: 'NARITA-SHI JP',
    country_name: 'Japan',
    message: 'At destination sort facility',
    country_iso3: 'JPN',
    tag: 'InTransit',
    subtag: 'InTransit_004',
    subtag_message: 'Arrived at destination country',
    checkpoint_time: '2018-07-24T08:27:00+09:00',
    coordinates: [],
    state: null,
    zip: null,
  },
  {
    slug: 'fedex',
    city: null,
    created_at: '2018-08-17T05:10:41+00:00',
    location: 'NARITA-SHI JP',
    country_name: 'Japan',
    message: 'In transit - Package available for clearance',
    country_iso3: 'JPN',
    tag: 'InTransit',
    subtag: 'InTransit_001',
    subtag_message: 'In Transit',
    checkpoint_time: '2018-07-24T09:35:00+09:00',
    coordinates: [],
    state: null,
    zip: null,
  },
  {
    slug: 'fedex',
    city: null,
    created_at: '2018-08-17T05:10:41+00:00',
    location: 'NARITA-SHI JP',
    country_name: 'Japan',
    message: 'International shipment release - Import',
    country_iso3: 'JPN',
    tag: 'InTransit',
    subtag: 'InTransit_007',
    subtag_message: 'Departure Scan',
    checkpoint_time: '2018-07-24T11:12:00+09:00',
    coordinates: [],
    state: null,
    zip: null,
  },
  {
    slug: 'fedex',
    city: null,
    created_at: '2018-08-17T05:10:41+00:00',
    location: 'NARITA-SHI JP',
    country_name: 'Japan',
    message: 'In transit - Tendered to authorized agent for final delivery',
    country_iso3: 'JPN',
    tag: 'OutForDelivery',
    subtag: 'OutForDelivery_001',
    subtag_message: 'Out for Delivery',
    checkpoint_time: '2018-07-24T13:02:00+09:00',
    coordinates: [],
    state: null,
    zip: null,
  },
  {
    slug: 'fedex',
    city: null,
    created_at: '2018-08-17T05:10:41+00:00',
    location: 'SAPPORO JP',
    country_name: 'Japan',
    message: 'Delivered',
    country_iso3: 'JPN',
    tag: 'Delivered',
    subtag: 'Delivered_001',
    subtag_message: 'Delivered',
    checkpoint_time: '2018-07-25T10:10:00+09:00',
    coordinates: [],
    state: null,
    zip: null,
  },
];

const TRACKING_FIXTURE = {
  id: PHONY_TRACKING_ID,
  created_at: '2018-08-17T05:10:38+00:00',
  updated_at: '2018-08-17T05:10:46+00:00',
  last_updated_at: '2018-08-17T05:10:46+00:00',
  tracking_number: TRACKING_NUMBER_STUB,
  slug: CURIER_STUB,
  active: false,
  android: [],
  custom_fields: null,
  customer_name: null,
  delivery_time: 2,
  destination_country_iso3: 'JPN',
  courier_destination_country_iso3: 'JPN',
  emails: [],
  expected_delivery: null,
  ios: [],
  note: null,
  order_id: null,
  order_id_path: null,
  origin_country_iso3: 'CHN',
  shipment_package_count: 1,
  shipment_pickup_date: '2018-07-23T08:58:00',
  shipment_delivery_date: '2018-07-25T01:10:00',
  shipment_type: 'FedEx International Economy',
  shipment_weight: 4,
  shipment_weight_unit: 'kg',
  signed_by: '..KOSUTOKO',
  smses: [],
  source: 'api',
  tag: 'Delivered',
  subtag: 'Delivered_001',
  subtag_message: 'Delivered',
  title: 'Title Name',
  tracked_count: 1,
  last_mile_tracking_supported: null,
  language: null,
  unique_token: 'deprecated',
  checkpoints: SOME_CHECKPOINTS,
  subscribed_smses: [],
  subscribed_emails: [],
  return_to_sender: false,
  tracking_account_number: null,
  tracking_origin_country: null,
  tracking_destination_country: null,
  tracking_key: null,
  tracking_postal_code: null,
  tracking_ship_date: null,
  tracking_state: null,
};

const packagedResponseData = data => ({ data: { data }});

describe('services/Aftership', () => {
  let networkActivity = null;

  afterEach(() => {
    networkActivity = null;
    sandbox.restore();
  });

  describe('couriers', () => {
    it('should detect a curier by tracking number', async () => {
      networkActivity = sandbox
        .stub(http, 'post')
        .resolves(packagedResponseData({
          couriers: SOME_COURIERS,
        }));

      const actualResult = await detectCourier(TRACKING_NUMBER_STUB);

      expect(actualResult).to.be.an('array');
      expect(actualResult).to.equal(SOME_COURIERS);
      expect(networkActivity.calledOnce).to.equal(true);
    });

    it('should retrieve a list of approved couriers from external service', async () => {
      networkActivity = sandbox
        .stub(http, 'get')
        .resolves(packagedResponseData({
          couriers: SOME_COURIERS,
        }));

      const actualResult = await getActiveCouriers();

      expect(actualResult).to.be.an('array');
      expect(actualResult).to.equal(SOME_COURIERS);
      expect(networkActivity.calledOnce).to.equal(true);
    });

    it('should retrieve a list of all supported couriers from external service', async () => {
      networkActivity = sandbox
        .stub(http, 'get')
        .resolves(packagedResponseData({
          couriers: SOME_COURIERS,
        }));

      const actualResult = await getAllCouriers();

      expect(actualResult).to.be.an('array');
      expect(actualResult).to.equal(SOME_COURIERS);
      expect(networkActivity.calledOnce).to.equal(true);
    });
  });

  describe('trackings', () => {
    it('should get the tracking info by curier and tracking number', async () => {
      networkActivity = sandbox
        .stub(http, 'get')
        .resolves(packagedResponseData({
          tracking: TRACKING_FIXTURE,
        }));

      const actualResult = await getTrackingInfo(TRACKING_NUMBER_STUB, CURIER_STUB);

      expect(actualResult).to.be.an('object');
      expect(actualResult).to.deep.equal(TRACKING_FIXTURE);
    });

    it('should add a tracking to the external service', async () => {
      networkActivity = sandbox
        .stub(http, 'post')
        .resolves(packagedResponseData({
          tracking: TRACKING_FIXTURE,
        }));

      const args = [
        TRACKING_NUMBER_STUB,
        CURIER_STUB,
        TRACKING_FIXTURE,
      ];

      const actualResult = await addTracking(...args);

      expect(actualResult).to.be.an('object');
      expect(actualResult).to.deep.equal(TRACKING_FIXTURE);
      expect(networkActivity.calledOnce).to.equal(true);
    });

    it('should update a tracking on the external service', async () => {
      networkActivity = sandbox
        .stub(http, 'put')
        .resolves(packagedResponseData({
          tracking: TRACKING_FIXTURE,
        }));

      const args = [
        TRACKING_NUMBER_STUB,
        CURIER_STUB,
        TRACKING_FIXTURE,
      ];

      const actualResult = await updateTracking(...args);

      expect(actualResult).to.be.an('object');
      expect(networkActivity.calledOnce).to.equal(true);
      expect(actualResult).to.deep.equal(TRACKING_FIXTURE);
    });

    it('should re-track an inactive tracking', async () => {
      const expectedResult = {
        active: true,
        slug: CURIER_STUB,
        id: PHONY_TRACKING_ID,
        tracking_number: TRACKING_NUMBER_STUB,
      };

      networkActivity = sandbox
        .stub(http, 'post')
        .resolves(packagedResponseData({
          tracking: expectedResult,
        }));

      const actualResult = await reTrack(TRACKING_NUMBER_STUB, CURIER_STUB);

      expect(actualResult).to.be.an('object');
      expect(networkActivity.calledOnce).to.equal(true);
      expect(actualResult).to.deep.equal(expectedResult);
    });

    it('should retrieve the last checkpoint by curier and trackingNumber', async () => {
      const [expectedResult] = SOME_CHECKPOINTS;
      networkActivity = sandbox
        .stub(http, 'get')
        .resolves(packagedResponseData({
          checkpoint: expectedResult,
        }));

      const actualResult = await getLatestCheckpoint(TRACKING_NUMBER_STUB, CURIER_STUB);

      expect(actualResult).to.be.an('object');
      expect(networkActivity.calledOnce).to.equal(true);
      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe('notifications', () => {
    it('should get the notification info for a specific tracking', async () => {
      networkActivity = sandbox
        .stub(http, 'get')
        .resolves(packagedResponseData({
          notification: NOTIFICATION_STUB,
        }));

      const actualResult = await getSubscriptions(TRACKING_NUMBER_STUB, CURIER_STUB);

      expect(actualResult).to.be.an('object');
      expect(networkActivity.calledOnce).to.equal(true);
      expect(actualResult).to.deep.equal(NOTIFICATION_STUB);
    });

    it('should subscribe to notifications on external service', async () => {
      networkActivity = sandbox
        .stub(http, 'post')
        .resolves(packagedResponseData({
          notification: NOTIFICATION_STUB,
        }));

      const args = [
        TRACKING_NUMBER_STUB,
        CURIER_STUB,
        NOTIFICATION_STUB,
      ];

      const actualResult = await subscribeToTracking(...args);

      expect(actualResult).to.be.an('object');
      expect(networkActivity.calledOnce).to.equal(true);
      expect(actualResult).to.deep.equal(NOTIFICATION_STUB);
    });

    it('should remove notification subscription from external service', async () => {
      networkActivity = sandbox
        .stub(http, 'post')
        .resolves(packagedResponseData({
          notification: NOTIFICATION_STUB,
        }));

      const args = [
        TRACKING_NUMBER_STUB,
        CURIER_STUB,
        NOTIFICATION_STUB,
      ];

      const actualResult = await unsubscribeToTracking(...args);

      expect(actualResult).to.be.an('object');
      expect(networkActivity.calledOnce).to.equal(true);
      expect(actualResult).to.deep.equal(NOTIFICATION_STUB);
    });
  });
});
