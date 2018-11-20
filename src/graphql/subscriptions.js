// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateTracking = `subscription OnCreateTracking {
  onCreateTracking {
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
export const onUpdateTracking = `subscription OnUpdateTracking {
  onUpdateTracking {
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
export const onDeleteTracking = `subscription OnDeleteTracking {
  onDeleteTracking {
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
export const onCreateCheckpoint = `subscription OnCreateCheckpoint {
  onCreateCheckpoint {
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
export const onUpdateCheckpoint = `subscription OnUpdateCheckpoint {
  onUpdateCheckpoint {
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
export const onDeleteCheckpoint = `subscription OnDeleteCheckpoint {
  onDeleteCheckpoint {
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
