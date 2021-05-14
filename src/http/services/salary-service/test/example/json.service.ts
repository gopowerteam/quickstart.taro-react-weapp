/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { Request, RequestParams } from '@gopowerteam/http-request'
import { Observable } from 'rxjs'
import { Test/example/jsonController } from '../../controller/salary-service/test/example/json.controller'

export class Test/example/jsonService {
    /**
     * 核算基数按月返Json
     */
    @Request({
        server: Test/example/jsonController.getMonthBonusRule
    })
    public getMonthBonusRule(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 核算基数MvelJson
     */
    @Request({
        server: Test/example/jsonController.getMvelRuleSource
    })
    public getMvelRuleSource(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
}