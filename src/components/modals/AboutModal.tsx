import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        এটি Wordle গেমের একটি ওপেন সোর্স প্রতিলিপি
        <a
          href="https://github.com/samayun/wordle"
          className="underline font-bold"
        >
          এখানে সোর্স কোড দেখুন
        </a>{' '}
        এবং
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          মূল গেম এখানে খেলুন
        </a>
      </p>
    </BaseModal>
  )
}
