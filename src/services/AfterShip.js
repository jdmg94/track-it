/**
 * @Author: JoseMunoz
 * @Date:   2018-11-09T06:33:41-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-11T19:04:45-06:00
 */
import axios from 'axios';

const afterShipApiKey = process.env.AFTERSHIP_KEY;
const http = axios.create({
  baseURL: 'https://api.aftership.com/v4',
  timeout: 2000,
  headers: {
    'aftership-api-key': afterShipApiKey,
    'Content-Type': 'application/json',
  },
});

const extractAfterShipResponse = ({ data: { data }}) => data;
const wrapTracking = trackingNumber => ({ tracking: { tracking_number: trackingNumber }});

const detectCourier = async trackingNumber => {
  const data = wrapTracking(trackingNumber);
  const result = await http.post('/couriers/detect', data);
  const { couriers } = extractAfterShipResponse(result);

  return couriers;
};

const getActiveCouriers = async () => {
  const result = await http.get('/couriers');
  const { couriers } = extractAfterShipResponse(result);

  return couriers;
};

const getAllCouriers = async () => {
  const result = await http.get('/couriers/all');
  const { couriers } = extractAfterShipResponse(result);

  return couriers;
};

const getTrackingInfo = async (trackingNumber, curier) => {
  const result = await http.get(`/tracking/${curier}/${trackingNumber}`);
  const { tracking } = extractAfterShipResponse(result);

  return tracking;
};

const reTrack = async (trackingNumber, curier) => {
  const result = await http.post(`/tracking/${curier}/${trackingNumber}/retrak`);
  const { tracking } = extractAfterShipResponse(result);

  return tracking;
};

const updateTracking = async (trackingNumber, curier, data) => {
  const result = await http.put(`/tracking/${curier}/${trackingNumber}`, data);
  const { tracking } = extractAfterShipResponse(result);

  return tracking;
};

const addTracking = async trackingNumber => {
  const data = wrapTracking(trackingNumber);
  const result = await http.post('/tracking', data);
  const { tracking } = extractAfterShipResponse(result);

  return tracking;
};

const getLatestCheckpoint = async (trackingNumber, curier) => {
  const result = await http.get(`/last_checkpoint/${curier}/${trackingNumber}`);
  const { checkpoint } = extractAfterShipResponse(result);

  return checkpoint;
};

const getSubscriptions = async (trackingNumber, curier) => {
  const result = await http.get(`notifications/${curier}/${trackingNumber}`);
  const { notification } = extractAfterShipResponse(result);

  return notification;
};

const subscribeToTracking = async (trackingNumber, curier, data) => {
  const result = await http.post(`/notifications/${curier}/${trackingNumber}/add`, data);
  const { notification } = extractAfterShipResponse(result);

  return notification;
};

const unsubscribeToTracking = async (trackingNumber, curier, data) => {
  const result = await http.post(`/notifications/${curier}/${trackingNumber}/remove`, data);
  const { notification } = extractAfterShipResponse(result);

  return notification;
};

export {
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
};
