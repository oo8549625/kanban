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

const indexView = (req, res) => {
    res.render("index");
}

const registerView = (req, res, next) => {
    res.render("register");
}

const loginView = (req, res, next) => {
    res.render("login");
}

module.exports = {
    indexView,
    loginView,
    registerView,
    boardView,
    boardUserView,
};