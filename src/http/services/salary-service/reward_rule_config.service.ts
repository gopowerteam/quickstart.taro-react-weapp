/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { Request, RequestParams } from '@gopowerteam/http-request'
import { Observable } from 'rxjs'
import { Reward_rule_configController } from '../../controller/salary-service/reward_rule_config.controller'

export class Reward_rule_configService {
    /**
     * create
     */
    @Request({
        server: Reward_rule_configController.create
    })
    public create(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * delete
     */
    @Request({
        server: Reward_rule_configController.delete
    })
    public delete(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * get All
     */
    @Request({
        server: Reward_rule_configController.getAll
    })
    public getAll(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * getById
     */
    @Request({
        server: Reward_rule_configController.getById
    })
    public getById(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * get List
     */
    @Request({
        server: Reward_rule_configController.getList
    })
    public getList(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * update
     */
    @Request({
        server: Reward_rule_configController.update
    })
    public update(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
}