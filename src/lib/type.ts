import { ITypeItem } from "@/interfaces/type.interface";
import axios from "axios";

export async function getTypes() {

    const res = fetch('http://localhost:8080/api/type/get-all-type');

    return (await res).json();


}