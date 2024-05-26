import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, MinLength } from "class-validator";
import { CreateAdDto } from "./create-ad.dto";

export class UpdateAdDto extends PartialType(CreateAdDto) {
    @IsString()
    @ApiProperty({
        example: "Clavier MX Master 3s",
        required: false,
    })
    title: string;

    @ApiProperty({
        example:
            "Un clavier ergonomique et silencieux, idéal pour les développeurs et les gamers.",
        required: false,
    })
    @IsString()
    @MinLength(2)
    @MaxLength(200)
    description?: string;
}
