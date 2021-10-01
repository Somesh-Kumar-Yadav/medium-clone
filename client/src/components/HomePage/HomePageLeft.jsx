import React from "react"
import styles from "../../styles/HomePage.module.css"
import { HomePageTopics } from "./HomePageTopics"
import {BlogCard} from "../LandingPage/BlogCard"
import {Tabs} from "../../styled-components/components"
import { useSelector } from "react-redux"

export const HomePageLeft = () => {
    const [tabs, setTabs] = React.useState(true);
    const blogs = useSelector(state => state.auth.blogs);
    return <div className={styles.home_page_left}>
        <div className={styles.home_page_left_top}>
            <span className={styles.home_topics_heading}>Your Topics</span>
            {
                Array(3).fill(0).map(item => {
                    return <HomePageTopics/>
                })
            }
        </div>
        <div className={styles.home_page_left_mid}>
            <Tabs onClick={()=>setTabs(false)} tab={tabs} val={false}>Following</Tabs>
            <Tabs onClick={()=>setTabs(true)} tab={tabs} val={true}>Recommended for you</Tabs>
        </div>
        <div className={styles.home_page_left_bottom}>
            {
                blogs.map((item) => {
                    return <BlogCard key={item._id} blog={ item}/>
                })
            }
        </div>
   </div>
}