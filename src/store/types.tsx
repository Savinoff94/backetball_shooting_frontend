import { type } from "os"

type ShootingSet = {
    tries: number,
    makes: number
}

type LocalTrainingSpotData = {
    [spotKey: string] : ShootingSet[]
}

type LocalTrainingData = {
    [id:string] : LocalTrainingSpotData
}

type ShootingSetRecord = {

    shootingRepId: string,
    shooterId: string,
    dateStr: string,
    spotKey: string,
    shootingHostUserId: string,
    tries: string,
    makes: string,
    createdAtStr: string,
    
}

type ShootingSetIdRecordResponseType = {
    [id:string] : ShootingSetRecord

}

type UserIdLoginMapType = {
    [id:string] : string
}

type ShootingSetIdRecordMapType = Map<string, ShootingSetRecord>;

type MyTeamIdsListType = 'trainingSquadIds' | 'representInChartUsersIds';

type MultiStageFormType = 'trainingStage' | 'chartStage'

export {
    type LocalTrainingData,
    type UserIdLoginMapType,
    type ShootingSetIdRecordResponseType,
    type ShootingSetIdRecordMapType,
    type ShootingSetRecord,
    type MyTeamIdsListType,
    type MultiStageFormType,
}