/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { Request, RequestParams } from '@gopowerteam/http-request'
import { Observable } from 'rxjs'
import { COSControllerController } from '../../controller/file-service/c-o-s-controller.controller'

export class COSControllerService {
    /**
     * 创建临时Secret
     */
    @Request({
        server: COSControllerController.createTempSecret
    })
    public createTempSecret(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 创建临时上传链接
     */
    @Request({
        server: COSControllerController.createUploadUrl
    })
    public createUploadUrl(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * fileUpload
     */
    @Request({
        server: COSControllerController.fileUpload
    })
    public fileUpload(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 获取默认私有存储URL
     */
    @Request({
        server: COSControllerController.generateDefaultPrivateUrl
    })
    public generateDefaultPrivateUrl(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 获取授权URL
     */
    @Request({
        server: COSControllerController.generatePresignedUrl
    })
    public generatePresignedUrl(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
}
