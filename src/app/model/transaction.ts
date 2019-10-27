export interface Transaction {

    montant: string;
    dateEnvoie: Date;
    commissionAdmin: number;
    commissionRetrait: number;
    commissionEnvoie: number;
    commissionEtat: number;
    dateRetrait: Date;
    status: string;
    agence: string;
    // tslint:disable-next-line: ban-types
    envoie: {prenomEnvoyeur: string, nomEnvoyeur: string};
    // tslint:disable-next-line: ban-type
    // tslint:disable-next-line: ban-types
    retrait: {prenom: string , nom: string};
    user: {nom: string, username: string};

}
