// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    first_name
    last_name
    email
    phone_number
    trackings {
      items {
        id
        active
        title
        slug
        return_to_sender
        tracking_number
        created_at
        updated_at
        customer_name
        expected_delivery
        origin_country_iso3
        shipment_package_count
        shipment_weight
        last_updated_at
        shipment_delivery_date
        shipment_pickup_date
        shipment_weight_unit
        subscribed_emails
        subscribed_smses
        signed_by
        delivery_time
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      first_name
      last_name
      email
      phone_number
      trackings {
        items {
          id
          active
          title
          slug
          return_to_sender
          tracking_number
          created_at
          updated_at
          customer_name
          expected_delivery
          origin_country_iso3
          shipment_package_count
          shipment_weight
          last_updated_at
          shipment_delivery_date
          shipment_pickup_date
          shipment_weight_unit
          subscribed_emails
          subscribed_smses
          signed_by
          delivery_time
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getTracking = `query GetTracking($id: ID!) {
  getTracking(id: $id) {
    id
    active
    title
    slug
    tag
    return_to_sender
    tracking_number
    created_at
    updated_at
    customer_name
    expected_delivery
    origin_country_iso3
    shipment_package_count
    shipment_weight
    last_updated_at
    shipment_delivery_date
    shipment_pickup_date
    shipment_weight_unit
    subscribed_emails
    subscribed_smses
    signed_by
    delivery_time
    owner {
      id
      first_name
      last_name
      email
      phone_number
    }
    checkPoints {
      items {
        id
        slug
        city
        state
        zip
        location
        country_name
        country_iso3
        created_at
        message
        subtag
        subtag_message
        checkpoint_time
      }
      nextToken
    }
  }
}
`;
export const listTrackings = `query ListTrackings(
  $filter: ModelTrackingFilterInput
  $limit: Int
  $nextToken: String
) {
  listTrackings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      active
      title
      slug
      tag
      return_to_sender
      tracking_number
      created_at
      updated_at
      customer_name
      expected_delivery
      origin_country_iso3
      shipment_package_count
      shipment_weight
      last_updated_at
      shipment_delivery_date
      shipment_pickup_date
      shipment_weight_unit
      subscribed_emails
      subscribed_smses
      signed_by
      delivery_time
      owner {
        id
        first_name
        last_name
        email
        phone_number
      }
      checkPoints {
        items {
          id
          slug
          city
          state
          zip
          location
          country_name
          country_iso3
          created_at
          message
          subtag
          subtag_message
          checkpoint_time
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getCheckpoint = `query GetCheckpoint($id: ID!) {
  getCheckpoint(id: $id) {
    id
    slug
    city
    state
    zip
    location
    country_name
    country_iso3
    created_at
    message
    tag
    subtag
    subtag_message
    checkpoint_time
    tracking {
      id
      active
      title
      slug
      return_to_sender
      tracking_number
      created_at
      updated_at
      customer_name
      expected_delivery
      origin_country_iso3
      shipment_package_count
      shipment_weight
      last_updated_at
      shipment_delivery_date
      shipment_pickup_date
      shipment_weight_unit
      subscribed_emails
      subscribed_smses
      signed_by
      delivery_time
    }
  }
}
`;
export const listCheckpoints = `query ListCheckpoints(
  $filter: ModelCheckpointFilterInput
  $limit: Int
  $nextToken: String
) {
  listCheckpoints(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      slug
      city
      state
      zip
      location
      country_name
      country_iso3
      created_at
      message
      tag
      subtag
      subtag_message
      checkpoint_time
      tracking {
        id
        active
        title
        slug
        return_to_sender
        tracking_number
        created_at
        updated_at
        customer_name
        expected_delivery
        origin_country_iso3
        shipment_package_count
        shipment_weight
        last_updated_at
        shipment_delivery_date
        shipment_pickup_date
        shipment_weight_unit
        subscribed_emails
        subscribed_smses
        signed_by
        delivery_time
      }
    }
    nextToken
  }
}
`;
