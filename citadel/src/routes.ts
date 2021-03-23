import {vehicleCreateHandler, vehicleDeleteByIdHandler, vehicleGetAllHandler, vehicleGetByIdHandler} from "./controller/vehicle";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/vehicles",
        method: "get",
        action: vehicleGetAllHandler
    },
    {
        path: "/vehicles/:id",
        method: "get",
        action: vehicleGetByIdHandler
    },
    {
        path: "/vehicles",
        method: "post",
        action: vehicleCreateHandler
    },
    {
        path: "/vehicles/:id",
        method: "delete",
        action: vehicleDeleteByIdHandler
    }
];