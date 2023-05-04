interface ContainerProps {
  children: React.ReactNode
}

export default function PageContainer ({ children }: ContainerProps) {
  return (
    <div className='p-4 overflow-y-hidden lg:overflow-y-auto'>{children}</div>
  )
}
