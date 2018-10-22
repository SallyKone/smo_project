import {Pointage} from './pointage.model';

export class Employe {
  type_employe: String;
  id_employe: number;
  cni: String;
  dateNaissance: Date;
  domicile: String;
  login: String;
  nom: String;
  password: String;
  photo: String;
  typePiece: String;
  pointage: Pointage;
}
