

import Link from "next/link"

import styles from'./BackButton.module.css'
interface BackButtonProps {
    LinkText:string,
    LinkTo:string,
}
export const BackButton = ({LinkText, LinkTo}:BackButtonProps) =>{
    return (
      <Link href={LinkTo} className={styles.BackButton}>{LinkText}
      </Link>
    )
}