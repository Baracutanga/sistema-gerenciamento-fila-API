"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtendimentoRepository = void 0;
const Atendimento_1 = __importDefault(require("../entities/Atendimento"));
const AtendimentoRepository = (dataSource) => dataSource.getRepository(Atendimento_1.default);
exports.AtendimentoRepository = AtendimentoRepository;
