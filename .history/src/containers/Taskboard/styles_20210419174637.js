const styles = (theme) => ({
  taskboard: {
    display: "flex",
    alignItems: "center",
  },
  shape: {
    // backgroundColor: "orange",
    // color: "white",
    // borderColor: "#ccc",
    padding: 20,
    margin: 10,
    borderRadius: 4,
    backgroundColor: theme.color.primary,
    color: theme.shape.textColor,
  },
});

export default styles;
