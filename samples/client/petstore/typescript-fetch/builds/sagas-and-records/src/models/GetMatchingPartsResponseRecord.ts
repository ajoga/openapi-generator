/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {ApiRecordUtils, knownRecordFactories, appFromJS, NormalizedRecordEntities} from "../runtimeSagasAndRecords";
import {getApiEntitiesState} from "../ApiEntitiesSelectors"
import {List, Record, RecordOf, Map} from 'immutable';
import {Schema, schema, NormalizedSchema} from "normalizr";
import {select, call} from "redux-saga/effects";

import {
    GetMatchingPartsResponse,
} from './GetMatchingPartsResponse';

import {
    MatchingParts,
} from './MatchingParts';
import {
    ResponseMeta,
} from './ResponseMeta';

import {
    MatchingPartsRecord,
    matchingPartsRecordUtils
} from './MatchingPartsRecord';
import {
    ResponseMetaRecord,
    responseMetaRecordUtils
} from './ResponseMetaRecord';

export const GetMatchingPartsResponseRecordProps = {
    recType: "GetMatchingPartsResponseApiRecord" as "GetMatchingPartsResponseApiRecord",
    meta: ResponseMetaRecord(),
    data: (MatchingPartsRecord(), null as MatchingPartsRecord | null),
};

export type GetMatchingPartsResponseRecordPropsType = typeof GetMatchingPartsResponseRecordProps;
export const GetMatchingPartsResponseRecord = Record(GetMatchingPartsResponseRecordProps, GetMatchingPartsResponseRecordProps.recType);
export type GetMatchingPartsResponseRecord = RecordOf<GetMatchingPartsResponseRecordPropsType>;

knownRecordFactories.set(GetMatchingPartsResponseRecordProps.recType, GetMatchingPartsResponseRecord);


class GetMatchingPartsResponseRecordUtils extends ApiRecordUtils<GetMatchingPartsResponse, GetMatchingPartsResponseRecord> {
    public normalize(apiObject: GetMatchingPartsResponse, asEntity?: boolean): GetMatchingPartsResponse {
        (apiObject as any).recType = GetMatchingPartsResponseRecordProps.recType;
        responseMetaRecordUtils.normalize(apiObject.meta);
        if (apiObject.data) { matchingPartsRecordUtils.normalize(apiObject.data); } 
        return apiObject;
    }

    public toApi(record: GetMatchingPartsResponseRecord): GetMatchingPartsResponse {
        const apiObject = super.toApi(record);
        apiObject.meta = responseMetaRecordUtils.toApi(record.meta);
        if (record.data) { apiObject.data = matchingPartsRecordUtils.toApi(record.data); } 
        return apiObject;
    }

    public fromApiPassthrough(apiObject: GetMatchingPartsResponse): MatchingPartsRecord {
        if (!apiObject.data) {return MatchingPartsRecord(); }
        const normalizedApiObject = matchingPartsRecordUtils.normalize(apiObject.data);
        return appFromJS(normalizedApiObject);
    }

    public fromApiPassthroughAsEntities(apiObject: GetMatchingPartsResponse): NormalizedRecordEntities {
        console.log("entities revival not supported on this response");
        return {entities: {}, result: List<string>()};
    }
}

export const getMatchingPartsResponseRecordUtils = new GetMatchingPartsResponseRecordUtils();

