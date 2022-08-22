let user_id = "yeliwei"
let selectBoard = "Board1"

const boardView = (req, res) => {
    res.redirect(`board/${user_id}/${selectBoard}`)
}

const boardUserView = (req, res) => {
    selectBoard = req.params.boardName
    res.render("board", {
        baseUrl: req.baseUrl,
        userId: req.params.userId,
        selectBoard: selectBoard,
        boards: ['Board1', 'Board2', 'Board3'],
        originalUrl: req.originalUrl
    })
}

const boardAPIs = (req, res) => {
    console.log(req.params)
}

module.exports = {
    boardView,
    boardUserView,
    boardAPIs
};