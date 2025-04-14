/* @name insertQuestions */
INSERT INTO questions (
    question,
    answer,
    evaluation

)
VALUES (
    :question,
    :answer,
    :evaluation
);


/* @name selectQuestions */
SELECT *
FROM questions;
