export const UPDATE = `
    UPDATE SPENTS
        SET id = ?, name = ?, type = ?, value = ?, date = ?, parcels = ?, parcelsInitialDate = ?, parcelsfinalDate = ?
    WHERE id = ?
`