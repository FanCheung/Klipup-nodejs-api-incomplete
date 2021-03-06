let mongoose = require('mongoose')
let _schema = new mongoose.Schema({
    uid: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' },
    type: String,
    last_modified: { type: Date, default: Date.now },
    content: mongoose.Schema.Types.Mixed,
    title: String,
    created_date: Date,
    tags: [String],
})

let _modelName = 'KlipModel'

_schema.statics = {
    addOne: addOne,
    deleteOne: deleteOne,
    getOne: getOne,
    getMany: getMany,
    getUserKlip: getUserKlip
}

let KlipModel = mongoose.model(_modelName, _schema, 'klips')

/**
 * [addOne description]
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
function addOne(obj) {
    return this.create(obj)
}

/**
 * [getOne description]
 * @param  {[type]} query [description]
 * @return {[type]}       [description]
 */
function getOne(query) {
    return this.findOne(query)
}

/**
 * [deleteOne description]
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
function deleteOne(id) {
    return this.findOne({ _id: id }).then((result) => {
        result.remove()
    })
}

function getMany() {

}
function getUserKlip(uid) {
    return this.find({ uid: uid }).sort({ last_modified: -1 })
}

export { KlipModel }
