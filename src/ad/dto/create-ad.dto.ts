import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, MinLength } from "class-validator";
import { IsCuid } from "src/decorators/IsCUID";

export class CreateAdDto {
    @ApiProperty({
        example: "Clavier MX Master 3",
        required: true,
    })
    @IsString()
    @MinLength(2)
    @MaxLength(30)
    title: string;

    @ApiProperty({
        example: "Un clavier ergonomique et silencieux",
        required: false,
    })
    @IsString()
    @MinLength(2)
    @MaxLength(200)
    description?: string;

    @IsString()
    @IsCuid()
    authorId: string;

    author: { connect: { id: string } };
}
