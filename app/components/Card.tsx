import { IDataAngkatan } from "../NIM-Finder/page";

export default function Card({ data }: { data: IDataAngkatan }) {
  return <div>{data["NIM Jurusan"]}</div>;
}
