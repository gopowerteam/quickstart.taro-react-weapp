/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { RequestMethod } from '@gopowerteam/http-request'

// 控制器名称
const controller = 'employee_attendance'
const service = 'xbt-platform-salary-service'

export const Employee_attendanceController = {
    // get All
    getAll: {
        service,
        controller,
        path: '/api/employee_attendance/getAll',
        action: 'getAll',
        type: RequestMethod.Get
    },
    // findOne
    getByEmployee: {
        service,
        controller,
        path: '/api/employee_attendance/getByEmployee/{employeeId}/{month}',
        action: 'getByEmployee',
        type: RequestMethod.Get
    },
    // findOne
    get: {
        service,
        controller,
        path: '/api/employee_attendance/getById/{id}',
        action: 'get',
        type: RequestMethod.Get
    },
    // import excel
    import: {
        service,
        controller,
        path: '/api/employee_attendance/import',
        action: 'import',
        type: RequestMethod.Get
    },
    // update
    update: {
        service,
        controller,
        path: '/api/employee_attendance/update',
        action: 'update',
        type: RequestMethod.Post
    }
}