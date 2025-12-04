// common layout for service page

export default function ServiceLayout({ children }) {
    
    return(
        <div>
            <nva>This is service page navbar</nva>
            {children}
        </div>
    )
}