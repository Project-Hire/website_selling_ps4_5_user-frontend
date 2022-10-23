import { API_CD_GAME_DETAIL } from '@config/api'
import { bindParams } from '@config/function'
import axios from 'axios'
import { useQuery } from 'react-query'

const getCDGameDetail = async (id: string) => {
  const { data } = await axios.get(bindParams(API_CD_GAME_DETAIL, { id: Number(id) }))

  return data
}

const useCDGameDetailQuery = (id: string) => {
  return useQuery(['advertisement_detail'], () => getCDGameDetail(id), {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 5000,
    enabled: !!id,
  })
}

export default useCDGameDetailQuery
