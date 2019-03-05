/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
// copied from https://github.com/Microsoft/vscode/blob/52306b406d9231a0667c758e536bd177e5570180/src/vs/base/common/network.ts
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export namespace Schemas {

    /**
     * A schema that is used for models that exist in memory
     * only and that have no correspondence on a server or such.
     */
    export const inMemory: string = 'inmemory';

    /**
     * A schema that is used for setting files
     */
    export const vscode: string = 'vscode';

    /**
     * A schema that is used for internal private files
     */
    export const internal: string = 'private';

    /**
     * A walk-through document.
     */
    export const walkThrough: string = 'walkThrough';

    /**
     * An embedded code snippet.
     */
    export const walkThroughSnippet: string = 'walkThroughSnippet';

    export const http: string = 'http';

    export const https: string = 'https';

    export const file: string = 'file';

    export const mailto: string = 'mailto';

    export const untitled: string = 'untitled';

    export const data: string = 'data';

    export const command: string = 'command';
}
