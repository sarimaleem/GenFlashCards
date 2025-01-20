/* @name getAllFlashcards */
SELECT *
FROM flashcards;


/* @name getFlashcard*/
SELECT *
FROM flashcards
WHERE id = :id;

/* @name createFlashcard*/
INSERT INTO flashcards (definition, word)
VALUES (:definition, :word);

/* @name updateFlashcard*/
UPDATE flashcards
SET word = :word, definition = :definition
WHERE id = :id;

/* @name deleteFlashcard*/
DELETE FROM flashcards
WHERE id = :id;


