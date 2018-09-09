export const ACTION_GET_CRTO_DATA  = 'ACTION_GET_CRTO_DATA'
export const ACTION_SET_CRTO_DATA  = 'ACTION_SET_CRTO_DATA'

export const getCryptoData = () => ({
    type: ACTION_GET_CRTO_DATA
})

export const setCryptoData= (cryptoData) => ({
    type: ACTION_SET_CRTO_DATA,
    cryptoData
})