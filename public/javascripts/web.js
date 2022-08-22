$(() => {
    $("ul.board").sortable({
        connectWith: "ul.board",
        placeholder: "ui-state-highlight"
    }).disableSelection();

    $("button.menu").on("click", () => {
        $("#sidebar").removeClass("-translate-x-full")
    });

    $("button.close").on("click", () => {
        $("#sidebar").addClass("-translate-x-full")
    });

    $(".task-component").on("click", (e) => {
        $(`#${e.target.id}`)
            .after("<input></input>")

        $(`#${e.target.id} + input`)
            .addClass("editable-component w-full rounded-md px-1 py-1 text-gray-900 text-sm font-medium outline outline-offset-2 outline-1 outline-gray-400")
            .attr('id', "editable-component1")
            .trigger("focus")
            .val(e.target.innerText);

        $(`#${e.target.id}`).remove();

        $(".editable-component").on("keydown", (input_event) => {
            if (input_event.key.toLowerCase() == 'a' && input_event.ctrlKey) {
                input_event.target.select()
            }
            if (input_event.key.toLowerCase() == 'enter') {
                console.log($(`#${input_event.target.id}`).val())
                $(`#${input_event.target.id}`)
                    .after("<span></span>")

                $(`#${input_event.target.id} + span`)
                    .addClass("task-component cursor-text rounded-md px-1 py-1 text-gray-900 text-sm font-medium hover:outline hover:outline-offset-2 hover:outline-1 hover:outline-gray-400")
                    .attr('id', 'task-text1')
                    .text($(`#${input_event.target.id}`).val());

                $(`#${input_event.target.id}`).remove();
            }
        })
    })

});
