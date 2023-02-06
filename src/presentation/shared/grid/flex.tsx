const Flex = (props: any) => {
    return (
        <div style={{flex: 1}}>
            {props.children}
        </div>
    )
}

export default Flex