import boardmemberFemale1 from '@/public/bord-member-female-1.jpg'
import boardmemberFemale2 from '@/public/bord-member-female-2.jpg'
import boardmemberFemale3 from '@/public/bord-member-female-3.jpg'
import boardmemberMale1 from '@/public/bord-member-male-1.jpg'
import boardmemberMale2 from '@/public/bord-member-male-2.jpg'
import boardmemberMale3 from '@/public/bord-member-male-3.jpg'
import Image from 'next/image'

const BoardMembers = () => {
  return (
    <div className='my-16'>
      <h1 className='text-center text-5xl text-sky-400 font-bold mb-10'>Board <span>Members</span></h1>
      <div className='w-full flex flex-wrap gap-6 p-3'>
        <Image src={boardmemberFemale1} alt='Board Member' width={310} height={200} />
        <Image src={boardmemberMale1} alt='Board Member' width={310} height={200} />
        <Image src={boardmemberFemale2} alt='Board Member' width={310} height={200} />
        <Image src={boardmemberMale2} alt='Board Member' width={310} height={200} />
        <Image src={boardmemberFemale3} alt='Board Member' width={310} height={200} />
        <Image src={boardmemberMale3} alt='Board Member' width={310} height={200} />
      </div>
    </div>
  )
}

export default BoardMembers