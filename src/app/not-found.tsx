
import Image from 'next/image'

export default function NotFound() {
  return (
    <div style={{ backgroundColor: 'gray' }}>
        <div>NotFound</div>
        <Image src='/next.svg' alt='Next.js' width={100} height={100} />
    </div>
  )
}