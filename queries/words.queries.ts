/** Types generated for queries found in "queries/words.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type NumberOrString = number | string;

/** 'GetAllFlashcards' parameters type */
export type IGetAllFlashcardsParams = void;

/** 'GetAllFlashcards' return type */
export interface IGetAllFlashcardsResult {
  created_at: Date;
  definition: string;
  id: string;
  production: number;
  translation: number;
  updated_at: Date;
  word: string;
}

/** 'GetAllFlashcards' query type */
export interface IGetAllFlashcardsQuery {
  params: IGetAllFlashcardsParams;
  result: IGetAllFlashcardsResult;
}

const getAllFlashcardsIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT *\nFROM flashcards"};

/**
 * Query generated from SQL:
 * ```
 * SELECT *
 * FROM flashcards
 * ```
 */
export const getAllFlashcards = new PreparedQuery<IGetAllFlashcardsParams,IGetAllFlashcardsResult>(getAllFlashcardsIR);


/** 'GetFlashcard' parameters type */
export interface IGetFlashcardParams {
  id?: NumberOrString | null | void;
}

/** 'GetFlashcard' return type */
export interface IGetFlashcardResult {
  created_at: Date;
  definition: string;
  id: string;
  production: number;
  translation: number;
  updated_at: Date;
  word: string;
}

/** 'GetFlashcard' query type */
export interface IGetFlashcardQuery {
  params: IGetFlashcardParams;
  result: IGetFlashcardResult;
}

const getFlashcardIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":36,"b":38}]}],"statement":"SELECT *\nFROM flashcards\nWHERE id = :id"};

/**
 * Query generated from SQL:
 * ```
 * SELECT *
 * FROM flashcards
 * WHERE id = :id
 * ```
 */
export const getFlashcard = new PreparedQuery<IGetFlashcardParams,IGetFlashcardResult>(getFlashcardIR);


/** 'CreateFlashcard' parameters type */
export interface ICreateFlashcardParams {
  definition?: string | null | void;
  word?: string | null | void;
}

/** 'CreateFlashcard' return type */
export type ICreateFlashcardResult = void;

/** 'CreateFlashcard' query type */
export interface ICreateFlashcardQuery {
  params: ICreateFlashcardParams;
  result: ICreateFlashcardResult;
}

const createFlashcardIR: any = {"usedParamSet":{"definition":true,"word":true},"params":[{"name":"definition","required":false,"transform":{"type":"scalar"},"locs":[{"a":50,"b":60}]},{"name":"word","required":false,"transform":{"type":"scalar"},"locs":[{"a":63,"b":67}]}],"statement":"INSERT INTO flashcards (definition, word)\nVALUES (:definition, :word)"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO flashcards (definition, word)
 * VALUES (:definition, :word)
 * ```
 */
export const createFlashcard = new PreparedQuery<ICreateFlashcardParams,ICreateFlashcardResult>(createFlashcardIR);


/** 'UpdateFlashcard' parameters type */
export interface IUpdateFlashcardParams {
  definition?: string | null | void;
  id?: NumberOrString | null | void;
  word?: string | null | void;
}

/** 'UpdateFlashcard' return type */
export type IUpdateFlashcardResult = void;

/** 'UpdateFlashcard' query type */
export interface IUpdateFlashcardQuery {
  params: IUpdateFlashcardParams;
  result: IUpdateFlashcardResult;
}

const updateFlashcardIR: any = {"usedParamSet":{"word":true,"definition":true,"id":true},"params":[{"name":"word","required":false,"transform":{"type":"scalar"},"locs":[{"a":29,"b":33}]},{"name":"definition","required":false,"transform":{"type":"scalar"},"locs":[{"a":49,"b":59}]},{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":72,"b":74}]}],"statement":"UPDATE flashcards\nSET word = :word, definition = :definition\nWHERE id = :id"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE flashcards
 * SET word = :word, definition = :definition
 * WHERE id = :id
 * ```
 */
export const updateFlashcard = new PreparedQuery<IUpdateFlashcardParams,IUpdateFlashcardResult>(updateFlashcardIR);


/** 'DeleteFlashcard' parameters type */
export interface IDeleteFlashcardParams {
  id?: NumberOrString | null | void;
}

/** 'DeleteFlashcard' return type */
export type IDeleteFlashcardResult = void;

/** 'DeleteFlashcard' query type */
export interface IDeleteFlashcardQuery {
  params: IDeleteFlashcardParams;
  result: IDeleteFlashcardResult;
}

const deleteFlashcardIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":false,"transform":{"type":"scalar"},"locs":[{"a":34,"b":36}]}],"statement":"DELETE FROM flashcards\nWHERE id = :id"};

/**
 * Query generated from SQL:
 * ```
 * DELETE FROM flashcards
 * WHERE id = :id
 * ```
 */
export const deleteFlashcard = new PreparedQuery<IDeleteFlashcardParams,IDeleteFlashcardResult>(deleteFlashcardIR);


