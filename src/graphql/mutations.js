// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createTracking = `mutation CreateTracking($input: CreateTrackingInput!) {
  createTracking(input: $input) {
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
export const updateTracking = `mutation UpdateTracking($input: UpdateTrackingInput!) {
  updateTracking(input: $input) {
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
export const deleteTracking = `mutation DeleteTracking($input: DeleteTrackingInput!) {
  deleteTracking(input: $input) {
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
export const createCheckpoint = `mutation CreateCheckpoint($input: CreateCheckpointInput!) {
  createCheckpoint(input: $input) {
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
export const updateCheckpoint = `mutation UpdateCheckpoint($input: UpdateCheckpointInput!) {
  updateCheckpoint(input: $input) {
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
export const deleteCheckpoint = `mutation DeleteCheckpoint($input: DeleteCheckpointInput!) {
  deleteCheckpoint(input: $input) {
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
