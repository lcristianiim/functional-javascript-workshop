var messages = [
    {
        "message": 'this is a message'
    },
    {
        "message": 'another message'
    },
    {
        "message": 'Adipisicing modi id cupiditate dolor sint animi. Iusto corporis eum deleniti tenetur recusandae expedita unde doloremque nesciunt pariatur omnis id cumque labore animi veniam laboriosam nihil consequuntur ab! Maiores maxime. Adipisicing sit quasi aut molestias distinctio eligendi praesentium aliquam! Iure eaque ipsum ad eligendi assumenda deleniti. Quaerat voluptas impedit voluptatibus officiis quam labore nobis iure quaerat id. Consequuntur placeat officia? Sit velit nemo ad eveniet veritatis animi officiis quia facilis? Repellat optio illum at accusamus at tempore assumenda ea perspiciatis aliquid totam eius aperiam mollitia repellendus aperiam harum amet, atque. Elit culpa odio possimus laudantium saepe quos. Dolorem dignissimos totam accusamus labore praesentium id corrupti temporibus temporibus! Dolorem officia molestiae necessitatibus error nesciunt? Deserunt sequi odio debitis impedit voluptates adipisci!  '
    }
];

function getShortMessages(messages) {
    var newArray = messages.map(function(obj) {
        var array = [];
        array = obj.message;
        return array;
    });
    return newArray.filter(function(item){
        return item.length < 50;
    });
}

module.exports = getShortMessages
