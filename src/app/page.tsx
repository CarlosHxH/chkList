import Header from '@/components/header';

const checklist = [
  {
    "uuid": "d8db316e-cdaa-46ab-986c-ffbf89d98da3",
    "full_name": "João Renner",
    "random_date": "2024-08-18 19:17:25 UTC",
    "vehicle_model": "Golf",
    "engine_displacement": "4.2",
    "vehicle_year": "1980",
    "vehicle_make": "Alfa Romeo",
    "vehicle_trim": "GS",
    "user_id": "78b6c5ca-ccaa-4384-9071-763a6eae4cf1"
  },
  {
    "uuid": "d8db316e-cdaa-46ab-986c-ffbf89d98da3",
    "full_name": "Pedro Renner",
    "random_date": "2024-08-18 19:17:25 UTC",
    "vehicle_model": "Golf",
    "engine_displacement": "4.2",
    "vehicle_year": "1980",
    "vehicle_make": "Alfa Romeo",
    "vehicle_trim": "GS",
    "user_id": "78b6c5ca-ccaa-4384-9071-763a6eae4cff"
  },
  {
    "uuid": "d8db316e-cdaa-46ab-986c-ffbf89d98da3",
    "full_name": "Reatha Renner",
    "random_date": "2024-08-18 19:17:25 UTC",
    "vehicle_model": "Golf",
    "engine_displacement": "4.2",
    "vehicle_year": "2010",
    "vehicle_make": "Alfa Romeo",
    "vehicle_trim": "GS",
    "user_id": "78b6c5ca-ccaa-4384-9071-763a6eae4cff"
  }
];
//type checklists = typeof checklist[number];
type checklist = {
  [x: string]: any;
  uuid: string;
  full_name: string;
  random_date: string;
  vehicle_model: string;
  engine_displacement: string;
  vehicle_year: string;
  vehicle_make: string;
  vehicle_trim: string;
}

const Card = ({ data }: any) =>
{ 
  return data.map((data:checklist, i: any) => (
    <div key={i}>
      <div className='max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[5rem] flex flex-col justify-center my-4 p-4'>
        <p className='text-xl font-semibold'>{data.full_name}</p>
        <p className='text-md font-semibold'>Nome: Motorista fulando da silvas</p>
      </div>
    </div>
  ))
}

export default async function Home() {
  return (
    <>
      <Header />
      <section className='bg-ct-blue-600 min-h-screen pt-20'>
        <div className='max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center'>
          <p className='text-3xl font-semibold'>
            Check List
          </p>
        </div>
      </section>
    </>
  );
}
