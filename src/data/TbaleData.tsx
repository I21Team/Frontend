import { ColumnDef } from "@tanstack/react-table"


// id: number;
// type_id: number;
// state_type_id: number;
// user_id: number | null;
// mac_address: string;
// software_version: string;
// date_of_service: Date;
// comm_state: boolean;
// connection_state: boolean | null;
// battery_capacity: number;


export const columns = [
    {
      accessorKey: "type_id",
      header: "Type",
    },
    {
      accessorKey: "software_version",
      header: "Version logicielle",
    },
    {
      accessorKey: "date_of_service",
      header: "Date de mise en service",
    },
    {
      accessorKey: "comm_state",
      header: "État de communication",
    },
    {
      accessorKey: "connection_state",
      header: "Connexion",
    },
    {
      accessorKey: "battery_capacity",
      header: "Batterie",
    },
    // {
    //   accessorKey: "last_position",
    //   header: "Dernière position",
    // },
    {
      accessorKey: "state_type_id",
      header: "Fonctionnement",
    },
    {
      accessorKey: "user_id",
      header: "Prénom du client",
    },
    {
      accessorKey: "user_id",
      header: "Nom de famille du client",
    },
    {
      accessorKey: "actions",
      header: "Actions",
    },
  ];